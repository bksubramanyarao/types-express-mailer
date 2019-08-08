import { Application } from "express";



interface options {
	from: string
	host: string
	port: number
	transportMethod: string
	auth: {
		user: string,
		pass: string
	}
}

// Taken from NodeMailer (libs/nodemailer.js v0.7.1 line 251)
interface sendOptions {
	from?: string,
	sender?: string,
	to: string,
	subject: string,
	replyTo?: string,
	debug?: boolean,
	reply_to?: string,
	cc?: string,
	bcc?: string,
	body?: string,
	text?: boolean,
	html?: boolean,
	envelope?: string,
	inReplyTo?: string,
	references?: string,
	attachments?: Buffer,
}

interface Mailer {
	/**
	* .send
	*
	* Sends an email using the given template and locals;
	*
	* @param {String} template file location
	* @param {Object} locals (template local variables)
	* @param {Function} callback with error
	*/
	send(template: string, sendOptions: sendOptions, callback: (err: any) => void): void;

	/**
	* .render
	*
	* Renders an enitre email using the given template and locals;
	*
	* @param {String|Object} template file location
	* @param {Object} locals (template local variables)
	* @param {Function} callback with error or email
	*/
	render(template: string, sendOptions: sendOptions, callback: (err: any, email: string) => void): void;

	/**
	 * .update
	 *
	 * Updates the settings for mailer and callsback when ready;
	 *
	 * @param {Object} options
	 * @param {Function} callback
	 */
	update(sendOptions: sendOptions, callback: (err: any) => void): void;
}

export function extend(app: Application, options: options): Application;


declare module 'express' {
	interface Request {
		mailer: Mailer
	}
}




