import React from "react";
import { Link as MaterialLink } from "@mui/material";
import { Link } from "react-router-dom";

import { SectionLinkType } from "../../types";

type HeaderLinkType = {
	section: SectionLinkType
};

export default function HeaderLink({ section }: HeaderLinkType) {
	return (
		<Link style={{ textDecoration: "none" }} to={section.url}>
			<MaterialLink
				fontSize={24}
				sx={{ textDecoration: "none" }}
			>{section.title}</MaterialLink>
		</Link>
	);
}
