#!/bin/bash
sudo systemctl daemon-reload
sudo systemctl enable userpreference.service
sudo systemctl start userpreference.service