#!/bin/bash
sudo cp /home/ec2-user/deploy/userpreference.service /etc/systemd/system/  # Ensure the file exists
sudo chown root:root /etc/systemd/system/userpreference.service  # Correct ownership
sudo systemctl daemon-reload
sudo systemctl enable userpreference.service
sudo systemctl start userpreference.service
