import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
    const data = await request.json();
    console.log(data);
    const result = await axios.post(
        `https://d5dvsartlv83ra2p2eek.apigw.yandexcloud.net/getAnnotation`,
        data
    );
    console.log(result.data, `GET ANNOTATION TEXT`);
    return NextResponse.json(result.data);
}

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const data = url.searchParams.get('url');

    const result = await axios.get(
        `http://62.84.122.91/upload`
    );
    // console.log(result.data, `${process.env.BACKEND_URL}/getArticle/`);
    return NextResponse.json(result.data);
}
