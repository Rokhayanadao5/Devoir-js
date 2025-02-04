const tbody = document.getElementById('tbody');
const clientDetailsContent = document.getElementById('clientFicheContent');
const clients = [
    {
        id: 1,
        nom: 'ndao',
        prenom: 'rama',
        telephone: '777457890',
        email: 'ramandao@gmail.com',
        address:'Medina',
        cathegorie: {
            id: 1,
            libelle: 'Nouveau'
        },
        Montant_dette: {
            montant_T: 20000,
            montant_verser: 5000,
            statut: {
                id: 1,
                libelle: 'non solvable'
            }
        }
    },
];

function generateClientTable() {
    tbody.innerHTML = ''; 
    clients.forEach(client => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${client.nom}</td>
            <td>${client.prenom}</td>
            <td>${client.telephone}</td>
            <td>${client.email}</td>
            <td>${client.address}</td>
            <td>${client.cathegorie.libelle}</td>
            <td>${client.Montant_dette.montant_T} FCFA</td>
            <td>${client.Montant_dette.statut.libelle}</td>
            <td>
                <button class="btn btn-info" onclick="afficherFicheClient(${client.id})">Afficher la fiche</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}




document.addEventListener('DOMContentLoaded', generateClientTable);
