import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { id, title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize">
        <div className="todo-icon">
          <table className="w3-table w3-striped">
            <tbody>
              <tr>
                <td width="40%">{`#${id}`.substring(0, 6)}</td>
                <td width="40%">{title}</td>
                <td className="mx-auto d-flex">
                  <span className="mx-5 text-success" onClick={handleEdit}>
                    <i
                      className="fas fa-pen"
                      title="Edit Item"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </span>
                  <span className="mx-2 text-danger" onClick={handleDelete}>
                    <i
                      className="fas fa-trash"
                      title="Delete Item"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    );
  }
}
