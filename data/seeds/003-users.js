exports.seed = function(knex) {
    return knex("users").insert([
        {
            id: "tiDTfeNF1KcEkW97gPLIpG85iub2",
            organization_id: 1,
            role_id: 2,
            first_name: "Bob",
            last_name: "Johnson",
            email: "bob_johnson@lambdaschool.com",
            phone: "800-800-8000"
        }
    ]);
};