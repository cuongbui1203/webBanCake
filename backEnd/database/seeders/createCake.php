<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class createCake extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('cake')->insert([
                'name' => 'macaron no.' . $i + 1,
                'price' => 50000 + $i * 2000,
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'detailShot' => 'macaron',
                'picture' => 'https://cdn.tgdd.vn/Files/2021/08/06/1373493/cach-lam-banh-macaron-thom-ngon-nhieu-huong-vi-202201110129065345.jpg',
                'quantity' => 50 + $i * 5,
                'categoryId' => 11,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }

        for ($i = 0; $i < 30; $i++) {
            DB::table('cake')->insert([
                'name' => 'cupcake no.' . $i + 1,
                'price' => 30000 + $i * 2000,
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'detailShot' => 'cupcake',
                'picture' => 'https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg',
                'quantity' => 50 + $i * 5,
                'categoryId' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }

        for ($i = 0; $i < 80; $i++) {
            DB::table('cake')->insert([
                'name' => 'dorayaki no.' . $i + 1,
                'price' => 70000 + $i * 2000,
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'detailShot' => 'dorayaki',
                'picture' => 'https://www.cet.edu.vn/wp-content/uploads/2022/01/cach-lam-banh-ran-doremon-1.jpg',
                'quantity' => 50 + $i * 5,
                'categoryId' => 2,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }

        for ($i = 0; $i < 50; $i++) {
            DB::table('cake')->insert([
                'name' => 'cookie no.' . $i + 1,
                'price' => 20000 + $i * 2000,
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'detailShot' => 'cookie',
                'picture' => 'https://www.richs.com.vn/images/Blog/Trends/banh%20quy%20an%20kieng/Eu_Biscuit_and_cookies.jpg',
                'quantity' => 50 + $i * 5,
                'categoryId' => 3,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }

        for ($i = 0; $i < 5; $i++) {
            DB::table('cake')->insert([
                'name' => 'Banh bo re tre no.' . $i + 1,
                'price' => 20000 + $i * 2000,
                'detailShot' => 'Banh bo re tre',
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'picture' => 'https://daylambanh.edu.vn/wp-content/uploads/2021/05/cach-lam-banh-bo-re-tre.jpg',
                'quantity' => 50 + $i * 5,
                'categoryId' => 4,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }

        for ($i = 0; $i < 55; $i++) {
            DB::table('cake')->insert([
                'name' => 'Banh bao no.' . $i + 1,
                'price' => 10000 + $i * 2000,
                'detailShot' => 'Banh bao',
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'picture' => 'https://beptruong.edu.vn/wp-content/uploads/2021/03/banh-bao-nhan-thit-dam-da-kho-quen.jpg',
                'quantity' => 50 + $i * 5,
                'categoryId' => 5,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }
        for ($i = 0; $i < 55; $i++) {
            DB::table('cake')->insert([
                'name' => 'Banh gio no.' . $i + 1,
                'price' => 70000 + $i * 2000,
                'detailShot' => 'Banh gio',
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'picture' => 'https://www.cet.edu.vn/wp-content/uploads/2018/08/banh-gio.jpg',
                'quantity' => 50 + $i * 5,
                'categoryId' => 6,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }
        for ($i = 0; $i < 55; $i++) {
            DB::table('cake')->insert([
                'name' => 'Banh kem rau cau no.' . $i + 1,
                'price' => 90000 + $i * 2000,
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'picture' => 'https://www.huongnghiepaau.com/wp-content/uploads/2019/12/banh-kem-rau-cau-nhan-pho-mai.jpg',
                'quantity' => 50 + $i * 5,
                'detailShot' => 'Banh kem rau cau',
                'categoryId' => 7,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }

        for ($i = 0; $i < 55; $i++) {
            DB::table('cake')->insert([
                'name' => 'Banh trung thu no.' . $i + 1,
                'price' => 90000 + $i * 2000,
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'detailShot' => 'Banh trung thu ',
                'picture' => 'https://cdnphoto.dantri.com.vn/lWUQMM7Em4TXVitHH6tSyHH396w=/thumb_w/1020/2023/09/07/banhstuk-edited-1694068845713.jpeg',
                'quantity' => 50 + $i * 5,
                'categoryId' => 8,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }

        for ($i = 0; $i < 55; $i++) {
            DB::table('cake')->insert([
                'name' => 'Banh thuyen no.' . $i + 1,
                'price' => 90000 + $i * 2000,
                'detailShot' => 'Banh thuyen',
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'picture' => 'https://daylambanh.edu.vn/wp-content/uploads/2022/09/cach-lam-banh-thuyen.jpg',
                'quantity' => 50 + $i * 5,
                'categoryId' => 9,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }
        for ($i = 0; $i < 55; $i++) {
            DB::table('cake')->insert([
                'name' => 'Banh mousse no.' . $i + 1,
                'price' => 94000 + $i * 2000,
                'detailShot' => 'Banh mousse',
                'detail' => 'The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.',
                'picture' => 'https://bepbanhtiny.com/wp-content/uploads/2022/05/cach-lam-banh-mousse-chanh-day-5.jpg',
                'quantity' => 70 + $i * 5,
                'categoryId' => 10,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }
    }
}
