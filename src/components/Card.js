import React from 'react';
import { getImageUrl } from '../../config';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: props.wasLiked,
      summaryShowing: false,
    };
  }

  toggleSummary = () => {
    const { summaryShowing } = this.state;

    this.setState({
      summaryShowing: !summaryShowing,
    });
  };

  render() {
    const { summaryShowing } = this.state;
    const {
      data: {
        id,
        poster_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
      },
    } = this.props;

    return (
      <div className="card">
        <div className="card__image" style={{ backgroundImage: `url(${getImageUrl(poster_path)})` }} />

        <div className="card__title">
          {original_title}
        </div>

        <div className="card__like">
          <i className={this.state.liked ? "fa fa-heart" : "fa fa-heart-o"} onClick={() => { this.handleLikeClick(id)}}/>
        </div>

        <div className="card__subtitle">
          <span>{release_date}</span>
          <span>{vote_average} ({vote_count} votes)</span>
        </div>

        {summaryShowing
          ? (
            <div className="card-info">
              <div className="card-info__header">Summary</div>
              <div className="card-info__description">
                {overview}
              </div>
            </div>
          )
          : null
        }

        <div className="button" onClick={() => this.toggleSummary()}>Show summary</div>
      </div>

    );
  }

    handleLikeClick(id) {
        const newLikedValue = !this.state.liked;
        this.props.onMovieLikedStateChange(id, newLikedValue);
        this.setState({
            liked: newLikedValue
        })
    }
}

export default Card;
