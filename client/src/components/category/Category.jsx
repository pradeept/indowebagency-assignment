import CategoryItem from "./CategoryItem";

const Category = ({categoryList,type})=>{
    return <>
    <div className="grid md:grid-cols-4">
        {
            categoryList.map((item,index)=>{
                return <CategoryItem name={item.name} approved={item.approved} key={index} type={type}/>
            })
        }
    </div>
        
    </>
}

export default Category;