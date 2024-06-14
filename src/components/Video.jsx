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
        <article className={clsx('flex flex-col gap-2', { 'special': props.channel === 'Marques Brownlee',})}>
            <img className="w-full rounded-xl object-cover" src={props.image} alt="" />
                <footer className="grid gap-2 grid-cols-[3rem_1fr]">
                    {props.channel && (
                        <img className="col-start-1 col-end-2 w-8 h-8 rounded" src={`https://api.dicebear.com/8.x/notionists/svg?seed=${props.channel}`} alt="" />
                    )}
                    {!props.channel && <span>😕</span>}

                    {/*props.channel ? (
                        <img src={`https://api.dicebear.com/8.x/notionists/svg?seed=${props.channel}`} alt="" />
                    ) : (
                        <span>😕</span>
                    )*/}

                    <p className="col-start 2 col-end-3">{props.title}</p>
                    <p className="col-start 2 col-end-3">{props.channel || 'UNKNOWN'}</p>
                </footer>
        </article>
    );
}