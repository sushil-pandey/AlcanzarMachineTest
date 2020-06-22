/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const fs = require('fs');

module.exports = {
	delete: async ( req , res ) => {
        const id =  req.params('id');
        try{
            News.destroy({id}).exec((err , confirmation)=>{
                if(err){
                    return res.status(400).send('can not delete');
                }

                
                

                return res.send(confirmation);   
            })
        }catch(event){
            console.log(event);
            return res.send('can not delete');
        }
        
    }
};

