use rspc::Router;

pub struct SpeakContext {
    db: Arc<PrismaClient>,

    session_id: Option<String>,

    cookies: Cookies,

    my_cool_msg: Arc<Mutex<String>>,
}

pub struct AuthenticatedCtx {
    db: Arc<PrismaClient>,
    user: User,
}

fn router() -> Router {
    let router = Router::<SpeakContext>::new()
        .query("version", |t| t(|ctx: SpeakContext, _: ()| "1.0.0"))
        .middleware(|mw| {
            mw.middleware(|mw| async move {
                let old_ctx = mw.ctx;
                match old_ctx.session_id {
                    Some(ref session_id) => Ok(mw.with_ctx(AuthenticatedCtx {
                        user: User::from_session(session_id).await?,
                        db: todo!(),
                    })),
                    None => Err(rspc::Error::new(
                        ErrorCode::Unauthorized,
                        "Unauthorized".into(),
                    )),
                }
            })
        })
        .query("getMe", |t| t(|ctx: AuthenticatedCtx, _: ()| ctx.user))
        .build();

    return router;
}

#[tokio::main]
async fn main() {
    let r = router();

    prisma_client_rust_cli::run();

    // Use your router like you normally would.
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_rspc_router() {
        super::router();
    }
}
