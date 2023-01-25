import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import directorySectionsData from "./directory-sections.data";

import "./directory.styles.scss";

class Directory extends React.Component {
  render() {
    return (
      <div className="directory-menu">
        {directorySectionsData.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
