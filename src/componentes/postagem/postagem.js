import "./postagem.css"

export default function Postagem( {post} ){
    return(
        <div className="post">

            <img
                className="postImg"
                src= {post.foto}
                alt= {post.alt}
            />

            <div className="postInfo">

                <div className="postCat">
                    <span>{post.info}</span>

                </div>
                <div className="postTitulo">
                    <span>{post.titulo}</span>
                </div>
                
                <div className="postData">
                    <span>{post.data}</span>
                </div>

                <div className="postDesc">
                <span>{post.desc}</span>
                </div>

            </div>

            



        </div>

    )
}