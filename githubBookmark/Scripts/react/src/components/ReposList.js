import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos, fetchSessionRepos } from '../actions';
import sessionApi from '../apis/sessionApi';

class ReposList extends Component {

    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }

    componentDidMount() {
        this.props.fetchSessionRepos();
    }

    onInputChange(term) {
        this.setState({term});
    }

    searchRepos(){
        if(this.state.term){
            this.props.fetchRepos(this.state.term);
        }
    }

    handleEnterSearch(event){
        if (event.key === 'Enter') {
            this.searchRepos();
          }
    }

    async handleBookmark(repo) {
        try {
            await sessionApi.post('/addRepo', {
                repoResult: JSON.stringify(repo)
            });
            
            this.props.fetchSessionRepos();
        } catch (err){
            console.log(err);
        }
    }

    renderList() {
        return this.props.repos.map(repo => {
            const isBookmarked = this.props.sessionRepos[repo.id] ? true : false;
            return (
                <div className="list-group-item list-group-item-action" key={repo.id}>
                    <div className="d-flex">
                        <img src={repo.owner.avatar_url} className="owner-avatar align-self-center mr-3" />
                        <div className="text-left">
                            <h2>{repo.full_name}</h2>
                            {isBookmarked ? "bookmarked!" :
                                <button
                                    className="btn btn-primary"
                                    onClick={() => this.handleBookmark(repo)}>
                                    Bookmark
                                </button>
                            }
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="list-group shadow">
                <div className="search-bar form-group d-flex">
                    <input
                        className="search-box form-control w-25"
                        value={this.state.term}
                        onKeyPress={event => this.handleEnterSearch(event)}
                        onChange={event => this.onInputChange(event.target.value)} />
                    <button className="btn btn-primary" onClick={this.searchRepos.bind(this)}>Search</button>
                </div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        repos: state.repos, 
        sessionRepos: state.sessionRepos 
    };
}

export default connect(
    mapStateToProps,
    { fetchRepos, fetchSessionRepos }
)(ReposList);