function HomeCard({img, title, content, child}) {

    const contentDefault = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dicta ab voluptatem doloribus tempore itaque voluptatibus, numquam quaerat nihil? Sint deleniti autem quos tenetur recusandae velit, molestiae ratione quibusdam sed";
    return ( 
        <div style={{display: "flex", flexDirection: "column"}}>
            <img src={img} alt="" style={{width: "100%"}} />
            <div style={{padding: "16px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <h1>{title}</h1>
                <p style={{textAlign: "left"}}>{content ? content : contentDefault}</p>
            </div>
        </div>
     );
}

export default HomeCard;
