<template>
    <div class="p-4 m-4 bg-white rounded flex flex-col">
        <div class="flex justify-between">
            <h1 class="text-2xl text-gray-700 mb-4">Expense Categories</h1>
         </div>

        <div class="flex justify-center">
            <table class="table-auto justify-center">

                <thead>
                    <tr>
                        <th class="border px-4 py-2">ID</th>
                        <th class="border px-4 py-2">Categories</th>
                        <th class="border px-4 py-2">Expense Category</th>
                        <th class="border px-4 py-2">Action</th>

                    </tr>
                </thead>

                <tbody>
                        <tr>
                            <td class="border px-4 py-2">3</td>
                            <td class="border px-4 py-2">Food</td>
                            <td class="border px-4 py-2">Groceries</td>
                            <td class="border px-4 py-2">
                                <button class="rounded px-3 py-2 mr-2 bg-orange-500 hover:bg-orange-700">Edit</button>
                                <button class="rounded px-3 py-2 mr-2 bg-red-500 hover:bg-red-700">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td class="border px-4 py-2">6</td>
                            <td class="border px-4 py-2">Furniture</td>
                            <td class="border px-4 py-2">Chairs</td>
                            <td class="border px-4 py-2">
                                <button class="rounded px-3 py-2 mr-2 bg-orange-500 hover:bg-orange-700">Edit</button>
                                <button class="rounded px-3 py-2 mr-2 bg-red-500 hover:bg-red-700">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td class="border px-4 py-2">7</td>
                            <td class="border px-4 py-2">Rent</td>
                            <td class="border px-4 py-2">Store Rent</td>
                            <td class="border px-4 py-2">
                                <button class="rounded px-3 py-2 mr-2 bg-orange-500 hover:bg-orange-700">Edit</button>
                                <button class="rounded px-3 py-2 mr-2 bg-red-500 hover:bg-red-700">Delete</button>
                            </td>
                        </tr>

                </tbody>

            </table>
        </div>
        
    </div>
</template>