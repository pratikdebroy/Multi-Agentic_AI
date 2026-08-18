const getCurrentUser=async (req,res)=>{
    try {
        return res.status(200).json(req.user)
    } catch (error) {
        console.log(error)
    }
}
export default getCurrentUser