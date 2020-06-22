

module.exports.policies = {

  
  '*': 'authenticated',
  'user': {
		'*': true
  },
  
  'account': {
		'*': true
	}
};
