use rspc::Router;

pub fn router() -> Router {
    let router = <Router>::new()
        .query("myQuery", |t| t(|_ctx, _input: ()| {
						println!("myQuery: {:?}", _input);
						Ok(())
				}))
        .build();

    return router;
}
