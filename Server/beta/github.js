import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {Card, Typography, Fab, Button, Divider } from '@material-ui/core';
import userTools from '../Firebase/Firebase'
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import Draggable from 'react-draggable';

export default function GithubLogin(props) {
    const {clientId, onSuccess, onFailure, userName} = props;
    const scope = 'user:email';

    const makeRequest = (userName) => {
       userTools.githubauth(userName)
    }
    return (
        <ListItem
            variant="outlined"
            button onClick={() => makeRequest(userName)}
        >
            <ListItemText
                disableTypography
                primary="Github"
            />
        </ListItem>
    )
}

export function Githgetrepo(props) {
    const [reposArray, setReposArray] = useState([]);
    const {user, canBeDeleted, refreshTime, widgetsArray, index, username, deleteWidget} = props;
    const [isDeleted, setIsDeleted] = useState(false);
    const getRepos = async () => {
        const ret = await axios.get(`https://api.github.com/users/${user}/repos`, {
            method: 'GET'
        })
        const tmp = [...ret.data];
        setReposArray(tmp);
    }

    useEffect(()=>{
        getRepos();
        setInterval(getRepos, 60000 * refreshTime);
    }, [])

    const destroyWidget = async () => {
        deleteWidget(index);
    };
    console.log(`user ${index}`);
    return(
        <Draggable>
            <Card>
                <Fab
                    color="secondary"
                    onClick={() => destroyWidget()}
                    disabled={isDeleted}
                >
                    <CloseIcon/>
                </Fab>
                <div>
                    <Typography> Public repositories </Typography>
                </div>
                <Typography>{user}</Typography>
                    <List>
                    {reposArray.map((index, key) => (
                        <div key={key}>
                            <a href={index.html_url}>
                                <ListItem
                                    alignItems="flex-start"
                                    button
                                >
                                <ListItemText primary={index.name}/>
                                </ListItem>
                            </a>
                        <Divider variant="inset" component="li" />
                    </div>
                ))}
                    </List>
            </Card>   
        </Draggable>
    )
}

export function Gitgetinfo(props) {
    const [reposArray, setReposArray] = useState([]);
    const {user, canBeDeleted, refreshTime, widgetsArray, index, username, deleteWidget} = props;
    const [isDeleted, setIsDeleted] = useState(false);
    const getRepos = async () => {
        const ret = await axios.get(`https://api.github.com/users/${user}`, {
            method: 'GET'
        })
        const tmp = ret.data
        setReposArray(tmp);
    }

    useEffect(()=>{
        getRepos();
        setInterval(getRepos, 60000 * refreshTime);
    }, [])

    const destroyWidget = async () => {
        deleteWidget(index);
    };
    console.log(`user ${index}`);
    return(
        <Draggable>
            <Card>
                <Fab
                    color="secondary"
                    onClick={() => destroyWidget()}
                    disabled={isDeleted}
                >
                    <CloseIcon/>
                </Fab>
                <div>
                    <Typography> info user </Typography>
                </div>
                <Typography>{user}</Typography>
                    <List>
                        <div>
                            <a href={reposArray["html_url"]}>
                                <ListItem
                                    alignItems="flex-start"
                                    button
                                >
                                <ListItemText primary={reposArray["login"]} secondary={reposArray["id"]}/>
                                </ListItem>
                            </a>
                        <Divider variant="inset" component="li" />
                    </div>
                    </List>
            </Card>   
        </Draggable>
    )
}

export function Githgetorga(props) {
    const [commitsArray, setCommitsArray] = useState([]);
    const {user, canBeDeleted, refreshTime, widgetsArray, index, repo, deleteWidget} = props;
    const [isDeleted, setIsDeleted] = useState(false);
    const [html_link, setlink] = useState([]);
    const getCommits = async () => {
        console.log(repo);
        const ret = await axios.get(`https://api.github.com/repos/${repo}/commits`, {
            method: 'GET'
        })
        const tmp = [...ret.data];
        setCommitsArray(tmp);
        console.log(tmp)
    }
    // Call function once at start + each minute * refresh time
    useEffect(()=>{
        getCommits();
        setInterval(getCommits, 60000 * refreshTime);
    }, [])

    const destroyWidget = async () => {
        deleteWidget(index);
    };
    return (
        <Draggable>
            <Card>
                <Fab
                    color="secondary"
                    onClick={() => destroyWidget()}
                    disabled={isDeleted}
                >
                    <CloseIcon/>
                </Fab>
                <div>
                    <Typography> commit repo </Typography>
                </div>
                <Typography>{user}</Typography>
                    <List>
                    {commitsArray.map((index, key) => (
                    <div key={key}>
                        <ListItem alignItems="flex-start">
                            <ListItemText primary={index.commit.message}
                                secondary={
                                    <React.Fragment>
                                        <Typography>
                                            {index.commit.committer.name}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                    ))}       
                    </List>
            </Card>   
        </Draggable>
    )

}

export function Gitgetnbfollower(props) {
    const [reposArray, setReposArray] = useState([]);
    const {user, canBeDeleted, refreshTime, widgetsArray, index, username, deleteWidget} = props;
    const [isDeleted, setIsDeleted] = useState(false);
    const getRepos = async () => {
        const ret = await axios.get(`https://api.github.com/users/${user}`, {
            method: 'GET'
        })
        const tmp = ret.data
        setReposArray(tmp);
    }

    useEffect(()=>{
        getRepos();
        setInterval(getRepos, 60000 * refreshTime);
    }, [])

    const destroyWidget = async () => {
        deleteWidget(index);
    };
    console.log(`user ${index}`);
    return(
        <Draggable>
            <Card>
                <Fab
                    color="secondary"
                    onClick={() => destroyWidget()}
                    disabled={isDeleted}
                >
                    <CloseIcon/>
                </Fab>
                <div>
                    <Typography> nb follower and following of user </Typography>
                </div>
                <Typography>{user}</Typography>
                    <List>
                        <div>
                                <ListItem
                                    alignItems="flex-start"
                                    button
                                >
                                <ListItemText primary={reposArray["followers"]} secondary={reposArray["following"]}/>
                                </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                    </List>
            </Card>   
        </Draggable>
    )
}