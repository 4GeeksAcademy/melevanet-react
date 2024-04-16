import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron ";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	const imagenes = [
		"https://th.bing.com/th/id/R.d9c2773b1c241854571d1bdad23af4a5?rik=Au1AINhvAWZmRg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-QMGOoEe7ORo%2fUictQ1DRsJI%2fAAAAAAAB4ow%2fQ3F1jbR67fo%2fs1600%2fcerca-del-cielo-y-los-planetas-im%c3%a1genes-de-fantas%c3%ada-close-to-sky-landscape-1920x1200-wallpaper-.jpg&ehk=7N3VXXUF7ESxVu%2fJqYAG2lwflwMsjAwn7hdRxBGsJms%3d&risl=&pid=ImgRaw&r=0",
		"https://avenirgaming.com/wp-content/uploads/2023/09/6509882dbf41a.jpeg",
		"https://img.freepik.com/premium-photo/landscape-illustration-beautiful-night-sky-clouds-ai-generation_1048515-2759.jpg",
		"https://th.bing.com/th/id/OIP.Vtxy0FjT_EfudI4cQk1kzAHaE8?rs=1&pid=ImgDetMain"
	]
	return (
		<div>
			<div> <Navbar /></div>
			<div className="container">
				<div><Jumbotron /></div>
				<br />
				<div className="container">
					<div className="row justify-content-between mb-5">
						{imagenes.map((imagen) => {
							return (
								<Card imagen={imagen} />
							)

						})}

					</div>

				</div>

			</div>
				<div><Footer /></div>

		</div>
	);
};

export default Home;
