import "./ContactItem.scss"

const ContactItem = ({ name, number, id, deleteHandler }) => (
    <>
        <span className="contact-item__data">
            {name} : {number}
        </span>
        <button
            onClick={()=>deleteHandler(id)} 
            type="button"
            className="button"
        >Delete</button>
    </>
)

export default ContactItem;