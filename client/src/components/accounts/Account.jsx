import AccountItem from "./AccountItem";

const Category = ({accountList})=>{

    const external = accountList[0].subscription?true:false;

    return <>
    <div className="grid md:grid-cols-4">
        {
            accountList.map((item,index)=>{
                return <AccountItem name={item.name} email={item.email} password={item.password} key={item._id} subscription={(external?item.subscription:undefined)} id={item._id}/>
            })
        }
    </div>
        
    </>
}

export default Category;