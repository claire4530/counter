import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET() {
    try {
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM reserve', (err: any, results: []) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
        console.log(results)
        return NextResponse.json(results)
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}
