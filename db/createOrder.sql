INSERT INTO orders (client_id, event_name, purchase_total)
VALUES ($1, $2, $3)
returning *