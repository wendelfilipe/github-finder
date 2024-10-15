import React from 'react'
import { RepoProps } from '../types/repo'
import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { RiGitRepositoryLine } from 'react-icons/ri'

const Repo = ({
    name, 
    language, 
    html_url, 
    forks_count, 
    stargazers_count
}: RepoProps) => {
  return (
        <div>
            <h3>{name}</h3>
            <p>
                <BsCodeSlash />
                {language}
            </p>
            <div>
                <div>
                    <AiOutlineStar />
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork />
                    <span>{forks_count}</span>
                </div>
            </div>
            <a href={html_url} target='_black'>
                <span>Ver código</span>
                <RiGitRepositoryLine />
            </a>
        </div>
  )
}

export default Repo