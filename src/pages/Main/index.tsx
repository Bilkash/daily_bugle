import React from "react";
import { Box, Grid } from "@mui/material";

import Layout from "../../Layout";

export default function Main() {
	return (
		<Layout>
			<Grid
				container
				spacing={2}
				sx={{ marginTop: "15px" }}
			>
				<Grid
					item
					xs={12}
				>
					<h2>
						WE NEED PHOTO OF SPIDER MAN, NOW!
					</h2>
				</Grid>

				<Grid
					item
					xs={4}
				>
					{/* eslint-disable-next-line max-len */}
					<img src={"https://upload.wikimedia.org/wikipedia/en/8/8e/J.K._Simmons_as_J._Jonah_Jameson.png"} alt={"image"}/>
				</Grid>

				<Grid
					item
					xs={8}
				>
					<Box>
						{/* eslint-disable-next-line max-len */}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, autem, consequuntur deleniti exercitationem facilis fugiat incidunt quaerat, tempore totam ullam veniam voluptate! Animi culpa expedita magnam molestiae nihil numquam repellendus saepe. Architecto corporis doloribus explicabo quis temporibus veniam voluptas. Accusantium architecto deleniti dolores eos eveniet ex fugit harum, inventore ipsam iure labore minus odio quasi recusandae, saepe sequi tempora velit voluptatem. Accusamus ad ipsa provident quas, quidem quod recusandae sequi. Aliquid est facilis fuga magni nulla porro quam repudiandae sunt tenetur velit. Accusantium, amet cumque ducimus eveniet, ex explicabo illum inventore, ipsa nesciunt omnis similique suscipit voluptatibus! Accusantium aliquam aspernatur at consequuntur cupiditate delectus dolorem, dolores eaque est id illo in labore laboriosam laborum non nostrum optio pariatur perferendis perspiciatis provident quae quam quasi quidem quod repellat sequi, tempora ut vel velit voluptatum! Accusamus, asperiores dicta, ipsum itaque, labore magni nam nulla quam quisquam ratione sapiente totam vel velit vero.
					</Box>

					<Box>
						{/* eslint-disable-next-line max-len */}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque beatae consectetur, corporis dicta dignissimos dolore dolorum ea eaque explicabo, facere facilis fugit laboriosam libero minus, nemo nobis odit praesentium qui quia quod repellendus rerum saepe sed similique sint tenetur! Atque debitis dicta distinctio dolore dolores dolorum eius excepturi facilis, fuga id in minima omnis quisquam ratione suscipit velit voluptas. Consectetur deserunt doloribus est illum ipsa laudantium molestiae, perferendis qui quod repellat? Fuga maxime, nihil nisi non quos ullam?
					</Box>
				</Grid>
			</Grid>
		</Layout>
	);
}
