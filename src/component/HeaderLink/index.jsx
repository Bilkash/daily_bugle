import React from "react";
import { Link as MaterialLink } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function HeaderLink({ section }) {
	return (
		<Link style={{ textDecoration: "none" }} to={section.url}>
			<MaterialLink
				fontSize={24}
				sx={{ textDecoration: "none" }}
			>{section.title}</MaterialLink>
		</Link>
	);
}

HeaderLink.propTypes = {
	section: PropTypes.shape({
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired
	}).isRequired
};
