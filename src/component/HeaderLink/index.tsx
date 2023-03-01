import React from "react";
import { Link as MaterialLink } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SectionLinkType } from "../../types";

export default function HeaderLink({ title, url }: SectionLinkType) {
	return (
		<Link style={{ textDecoration: "none" }} to={url}>
			<MaterialLink
				fontSize={24}
				sx={{ textDecoration: "none" }}
			>
				{title}
			</MaterialLink>
		</Link>
	);
}
