import './Content.css';

function Content () {

    const cont = 'content'

    const onC = ($event) => {
        console.log(222, $event.target, $event.value);
    }


    const onCut = ($event) => {
        console.log('ON CUT');
    }

    const onMW = () => console.log('Mouse Whell');

    const onMO = () => console.log('Mouse Over');


    return (<div onCopy={onC} onCut={onCut} onWheel={onMW} onMouseMove={onMO} className={cont}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere culpa quas rem obcaecati. Eaque id numquam maiores non debitis recusandae. Iusto similique, ad rerum ratione asperiores at accusantium sequi exercitationem!
    Nihil velit nesciunt commodi autem quisquam impedit doloremque ut maxime sapiente quaerat tempora labore omnis hic et saepe nostrum excepturi ex alias praesentium perferendis repudiandae, soluta nemo iure odit. Velit.
    Officiis ducimus voluptates tempora dignissimos provident aliquid, maxime sunt aperiam beatae facere nemo cumque debitis reiciendis. Excepturi, eum velit. Architecto ipsam, minima neque exercitationem officia omnis eligendi expedita magnam est!
    Eos laudantium blanditiis pariatur cum similique deleniti inventore ipsam modi! At est totam aut itaque iste doloribus in officia consequatur sunt quia sit veniam nulla dignissimos iure repudiandae, impedit velit!
    Inventore, quidem maiores. Suscipit vel maxime atque laborum vero nulla error ipsam in ratione at doloremque explicabo eligendi consequatur ea sint, inventore voluptatem est, mollitia eos ex vitae pariatur incidunt.
    </div>)
}

export default Content