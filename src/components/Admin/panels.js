import React from 'react';
import './paneldata.css';

const Panels = () => {
  return (
    <div>
          <ul className ="list-group">
      <li href="#" className="list-group-item title">
        Your friend zone
      </li>
      <li href="#" className="list-group-item text-left">
        <img className="img-thumbnail" src="https://bootdey.com/img/Content/User_for_snippets.png"/>
        <label className="name">
            Juan guillermo cuadrado<br/>
        </label>
        <label className="pull-right">
            <a  className="btn btn-success btn-xs glyphicon glyphicon-ok" href="#" title="View"></a>
            <a  className="btn btn-danger  btn-xs glyphicon glyphicon-trash" href="#" title="Delete"></a>
            <a  className="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment" href="#" title="Send message"></a>
        </label>
        <div className="break"></div>
      </li>
      </ul>
    </div>

  )
}
export default Panels;