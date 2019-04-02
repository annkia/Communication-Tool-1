import React from 'react'
import postsApi from '../http/posts'

export default class TestPost extends React.Component {
  state = {
    postId: "22f97323-7d6c-4400-9005-513de026f90c",
    post: {
      title: 'drugi post',
      text: 'edytowany post'
    },
    selectedFile: []
  }

  handleUpload = async (event) => {
    event.preventDefault();
    let formData = new FormData()
    formData.append('post', JSON.stringify(this.state.post))
    console.log('formatka', formData.post)
    console.log(formData.has("post"))
    await postsApi.createPost(formData)

  }

  handleDownloadAll = async (event) => {
    event.preventDefault()
    const allPosts = await postsApi.getPosts()
    console.log('wszystkie posty', allPosts)
  }

  handleDownload = async (event) => {
    event.preventDefault()
    const post = await postsApi.getOnePost(this.state.postId)
    console.log('jeden post', post)
  }

  updataPost = async (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append('post', JSON.stringify(this.state.post))
    await postsApi.updataPost(this.state.postId, formData)
  }


  deletePost = async (event) => {
    event.preventDefault()
    await postsApi.deletePost(this.state.postId)
  }

  render() {
    return (
      <form >
        <button onClick={this.handleUpload}>upload</button>
        <button onClick={this.handleDownloadAll}>dowloadALL</button>
        <button onClick={this.handleDownload}>dowloadONE</button>
        <button onClick={this.updataPost}>update</button>
        <button onClick={this.deletePost}>delete</button>
      </form>
    )
  }
}