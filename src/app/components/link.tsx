import React from "react";
import PropTypes from 'prop-types';
import NextLink from 'next/link';

export default function link({href, children}: {href: string, children: any}) {
    return (
        <NextLink href={href} passHref>
            {children}
        </NextLink>
    );
}

link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}