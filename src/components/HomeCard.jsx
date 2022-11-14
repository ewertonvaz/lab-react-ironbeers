function HomeCard({img, title, content, child}) {

    const contentDefault = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dicta ab voluptatem doloribus tempore itaque voluptatibus, numquam quaerat nihil? Sint deleniti autem quos tenetur recusandae velit, molestiae ratione quibusdam sed";
    return ( 
        <div style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid gray"
        }}>
            <img src={img} alt="" style={{width: "100%"}} />
            <div style={{padding: "16px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <h1 style={{marginBottom: "2px"}}>{title}</h1>
                <p style={{marginTop: "2px", textAlign: "left"}}>{content ? content : contentDefault}</p>
            </div>
        </div>
     );
}

export default HomeCard;
