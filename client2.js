// function afficherFicheClient(clientId) {
//     const client = clients.find(c => c.id === clientId);
//     if (client) {
//         clientDetailsContent.innerHTML = `
//             <strong>Nom:</strong> ${client.nom} <br>
//             <strong>Prénom:</strong> ${client.prenom} <br>
//             <strong>Téléphone:</strong> ${client.telephone} <br>
//             <strong>Email:</strong> ${client.email} <br>
//             <strong>Catégorie:</strong> ${client.cathegorie.libelle} <br>
//             <strong>Montant de la Dette:</strong> ${client.Montant_dette.montant_T} FCFA <br>
//             <strong>Montant Versé:</strong> ${client.Montant_dette.montant_verser} FCFA <br>
//             <strong>Statut de la Dette:</strong> ${client.Montant_dette.statut.libelle}
//         `;
        
//         const affichermodal = new bootstrap.Modal(document.getElementById('clientFicheModal'));
//         affichermodal.show();
//     }
//}


document.addEventListener('DOMContentLoaded', generateClientTable);
