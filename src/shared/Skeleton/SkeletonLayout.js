import { Skeleton } from "@mui/material";
import React from "react";

export default function SkeletonLayout({ children, animation = 'pulse' }) {
	return (
		<>
			{children.map((element, index) => (
				<Skeleton
                    variant={element.type}
                    animation={animation}
					key={index}
					width={element.props.style ? element.props.style.width : ""}
					height={element.props.style ? element.props.style.height : ""}
                >
					{element}
				</Skeleton>
			))}
		</>
	);
}