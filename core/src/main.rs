mod prisma;

use prisma::PrismaClient;
use prisma::user;
use prisma_client_rust::NewClientError;

#[tokio::main]
async fn main() {
	let client: Result<PrismaClient, NewClientError> = PrismaClient::_builder().build().await;
	let user: user::Data = user::Data{id: 1, name: "Deondre".to_string()};
	print!("{} {}", user, 1)
}
