SELECT event_name, purchase_total from orders
JOIN client ON client.id = orders.client_id
WHERE client.id = $1