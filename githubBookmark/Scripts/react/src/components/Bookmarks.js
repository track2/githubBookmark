import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessionRepos } from '../actions';

class Bookmarks extends Component {

    componentDidMount() {
        this.props.fetchSessionRepos();
    }

    renderList() {
        return _.map(this.props.sessionRepos, repo => {
            return (
                <div className="list-group-item list-group-item-action" key={repo.id}>
                    <div className="d-flex">
                        <img src={repo.owner.avatar_url} className="owner-avatar align-self-center mr-3" />
                        <div className="text-left">
                            <h2>{repo.full_name}</h2>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="list-group shadow">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        sessionRepos: state.sessionRepos 
    };
}

export default connect(
    mapStateToProps,
    { fetchSessionRepos }
)(Bookmarks);