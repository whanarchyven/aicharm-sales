import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params; // Получаем id из параметров маршрута

    const result = await axios.get(
        `http://62.84.122.91/report/${id}` // Используем id в URL для получения данных
    );

    return NextResponse.json(result.data);
}
