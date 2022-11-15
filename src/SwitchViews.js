import React from 'react';

export default function SwitchViews({ active, children }) {
    return children.filter(child => child.props.name === active)
}