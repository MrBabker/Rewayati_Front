
export const HOST = 'http://localhost:5000'

export interface Story {
    id: number;
    creator: string;
    title: string;
    description: string;

    subtitles: Subtitle[];

    subjects: Subject[];

    createdAt: Date;

}

export interface Subtitle {
    subtitle: string
}

export interface Subject {
    subject: string
}

export interface User {
    id:number;
    username:string;
    email:string;
    logged:boolean;
}





/*const compressString = (chars: string[]) => {

    const tak: string[] = []
    for (let i = 0; i < chars.length; i++) {
        if (i < chars.length - 1) {
            if (i === 0 || chars[i] === chars[i - 1]) {
                if (tak.includes(chars[i]) === false) {
                    tak.push(chars[i]);
                    tak.push('1');
                } else {
                    const target = tak.find(t => t === chars[i])
                    const index = tak.indexOf(target)
                    tak[index + 1] = (parseInt(tak[index])+1).toString()
                }
            } else {
                tak.push(chars[i]);
                tak.push('1');
            }
        }
    }


    return tak.join('');
}*/



