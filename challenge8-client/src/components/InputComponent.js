import React from 'react'
import { useState } from 'react';

export const InputComponent = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [domisili, setDomisili] = useState('');

    return (
        <div>
            <h1>Sample</h1>
            <form>
                <label>Nama</label>
                <input
                    type="text"
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Domisili</label>
                <input
                    type="text"
                    required
                    value={domisili}
                    onChange={(e) => setDomisili(e.target.value)}
                />
                <p>{nama}</p>
                <p>{email}</p>
                <p>{domisili}</p>
            </form>
        </div>
    )
}
