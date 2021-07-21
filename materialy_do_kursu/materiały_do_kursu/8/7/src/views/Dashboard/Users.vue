<template>
    <v-card>
        <v-card-title>
            Użytkownicy
            <v-spacer/>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Szukaj"
                single-line
                hide-details
                ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="users"
            :search="search"
        >
            <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.nick }}</td>
                <td>{{ props.item.hometown }}</td>
                <td>{{ props.item.age }}</td>
                <td>{{ props.item.points }}</td>
            </template>
            <v-alert v-slot:no-results :value="true" color="error" icon="warning">
                Wyszukiwanie dla frazy "{{search}}" niczego nie znalazło.
            </v-alert>
        </v-data-table>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                search: '',
                headers: [
                    { text: 'Imię i nazwisko', value: 'name' },
                    { text: 'Pseudonim', value: 'nick' },
                    { text: 'Miejscowość', value: 'hometown' },
                    { text: 'Wiek', value: 'age' },
                    { text: 'Punkty', value: 'points' }
                ],
                users: [
                    {
                        name: 'Tom John',
                        nick: "Tommy12",
                        hometown: "Jersey",
                        age: 15,
                        points: 1204
                    },
                    {
                        name: 'Arthur Shelbu',
                        nick: "PeakyOne",
                        hometown: "Birmingham",
                        age: 21,
                        points: 1347
                    },
                    {
                        name: 'Filip Zamachowski',
                        nick: "PhilippRTV",
                        hometown: "Warszawa",
                        age: 9,
                        points: 998
                    },
                    {
                        name: 'Jacob Nedler',
                        nick: "Needeeee",
                        hometown: "London",
                        age: 24,
                        points: 2068
                    },
                    {
                        name: 'Ignacy Zamachowski',
                        nick: "Ignaś",
                        hometown: "Sosnowiec",
                        age: 13,
                        points: 221
                    },
                    {
                        name: 'Jesus Dioger',
                        nick: "jesus123",
                        hometown: "Mexico City",
                        age: 20,
                        points: 1523
                    }
                ]
            }
        }
    }
</script>