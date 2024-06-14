import clsx from "clsx";

export default function Video(props) {
//    if (!props.channel) {
//      return (
//         <article>
//           <p>Incompleto</p>
//     </article>
//       );
//  }

//   const articleClassNames = 'video-card' + (props.channel === 'Marques Brownlee' ? ' special': "");

//let articleClassNames = ["video-card"];

//if (props.channel === 'Marques Brownlee') {
  //  articleClassNames.push("special");
//}

//return (
   // <article className={articleClassNames.join(" ")}>

    return (
        <article className={clsx('video-card', { 'special': props.channel === 'Marques Brownlee',})}>
            <img src={props.image} alt="" />
                <footer>
                    {props.channel && (
                        <img src={`https://api.dicebear.com/8.x/notionists/svg?seed=${props.channel}`} alt="" />
                    )}
                    {!props.channel && <span>😕</span>}

                    {/*props.channel ? (
                        <img src={`https://api.dicebear.com/8.x/notionists/svg?seed=${props.channel}`} alt="" />
                    ) : (
                        <span>😕</span>
                    )*/}

                    <p className="video-card-title">{props.title}</p>
                    <p className="video-card-channel">{props.channel || 'UNKNOWN'}</p>
                </footer>
        </article>
    );
}