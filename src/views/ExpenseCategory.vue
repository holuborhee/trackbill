<template>
    <div class="p-4 m-4 bg-white rounded flex flex-col">
        <div class="flex justify-between">
            <h1 class="text-2xl text-gray-700 mb-4">Expense Categories</h1>
         </div>

        <div class="flex justify-center">
            <table class="table-auto justify-center">

                <thead>
                    <tr>
                         
                        <th class="border px-4 py-2">Category</th>
                        <th class="border px-4 py-2">Balance</th>
                        <th class="border px-4 py-2">No of Items in Wishlist</th>
                        <th class="border px-4 py-2">Actions</th>

                    </tr>
                </thead>

                <tbody>
                        <tr>
                            <td class="border px-4 py-2">Wants</td>
                            <td class="border px-4 py-2">N23,000</td>
                            <td class="border px-4 py-2">3</td>
                            <td class="border px-4 py-2">
                                <button class="rounded px-3 py-2 mr-2 bg-orange-500 hover:bg-orange-700">View</button>
                             </td>
                        </tr>

                        <tr>
                            <td class="border px-4 py-2">Needs</td>
                            <td class="border px-4 py-2">N53,000</td>
                            <td class="border px-4 py-2">5</td>
                            <td class="border px-4 py-2">
                                 <button class="rounded px-3 py-2 mr-2 bg-orange-500 hover:bg-orange-700">View</button>
                            </td>
                        </tr>

                        <tr>
                            <td class="border px-4 py-2">Savings</td>
                            <td class="border px-4 py-2">N71,000</td>
                            <td class="border px-4 py-2">1</td>
                            <td class="border px-4 py-2">
                                <button class="rounded px-3 py-2 mr-2 bg-orange-500 hover:bg-orange-700">View</button>
                             </td>
                        </tr>

                </tbody>

            </table>
        </div>
        
    </div>
</template>