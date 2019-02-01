import React from 'react';

export const Help = function(props) {
  return (
    <div id="help-menu">
      <div id="help-dialog">
        <p>Use the "<b>Add Data</b>" tab to start recording your headaches</p>
        <p>The "<b>Setup</b>" tab allows you to view user information and add custom triggers</p>
        <p><em>Not all functionality is available, data visualization and insights are coming soon.</em></p>
      </div>
      <div id="help-background" onClick={props.closeMenu}></div>
    </div>
  );
};
