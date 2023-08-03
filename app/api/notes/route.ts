import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export async function GET() {
    const res = await supabase.from('notes').select();
    return NextResponse.json(res);
};

export async function DELETE(request: Request) {

    const res = await request.json();

    console.log(res);

    // const res = await supabase.from('notes').delete().eq('note_id', -1);

    return NextResponse.json(null, {status: 200})
};
