import { Component } from "react";
import "./index.css";

class ContactItem extends Component {
  onChangeFavoriteIcon = () => {
    const { contactDetails, onChangeIcon } = this.props;
    const { id } = contactDetails;
    onChangeIcon(id);
  };

  render() {
    const { contactDetails } = this.props;
    const { name, mobileNo, isFavorite, id } = contactDetails;
    console.log(id);

    const starImgUrl = isFavorite
      ? "https://assets.ccbp.in/frontend/react-js/star-filled-img.png"
      : "https://assets.ccbp.in/frontend/react-js/star-outline-img.png";
    return (
      <li className="table-row">
        <div className="table-cell name-column">
          <p>{name}</p>
        </div>
        <hr className="separator" />
        <div className="table-cell mobile-no-column">
          <p className="mobile-no-value">{mobileNo}</p>
          <button
            type="button"
            className="favorite-icon-container"
            onClick={this.onChangeFavoriteIcon}
          >
            <img src={starImgUrl} className="favorite-icon" alt="star" />
          </button>
        </div>
      </li>
    );
  }
}

export default ContactItem;
