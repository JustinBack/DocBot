import { Regex } from '../models';

module.exports = {
    	expression: new RegExp("^((?=.*fail)|(?=.*enforce))((?=.*waiver))", "i"),
	caseID: 295,
	name: "Failure to enforce any provision of the Terms of Service does not constitute a waiver of such provision"
} as Regex;
