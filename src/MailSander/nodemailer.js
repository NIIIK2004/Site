import nodemailer from 'nodemailer';
console.log("sendEmail() was called");

export async function sendEmail(name, surname, email, phone, teacher) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yourihelo1971@gmail.com',
            pass: 'asd58rcd'
        }
    });

    await transporter.sendMail({
        from: 'yourihelo1971@gmail.com',
        to: email,
        subject: 'Подтверждение записи на встречу',
        text: `Здравствуйте ${name} ${surname},\nвам была назначена встреча на 10.06 в 11:30 по адресу Шалимово д5 с преподавателем ${teacher}.`
    });

    return true;
}